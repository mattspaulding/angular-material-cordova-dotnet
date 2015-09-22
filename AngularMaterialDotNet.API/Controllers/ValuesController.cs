using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularMaterialDotNet.API.Models;
using AutoMapper;
using Microsoft.AspNet.Identity;
using System.Web;

namespace AngularMaterialDotNet.API.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Values
        public List<ValueResponse> GetValues()
        {
            var userId = User.Identity.GetUserId();
            Mapper.CreateMap<Value, ValueResponse>();
            return Mapper.Map<List<ValueResponse>>(db.Values.Where(x=>x.ApplicationUserId==userId));
        }

        // GET: api/Values/5
        [ResponseType(typeof(Value))]
        public IHttpActionResult GetValue(int id)
        {
            Value value = db.Values.Find(id);
             if (value == null)
            {
                return NotFound();
            }
            if (User.Identity.GetUserId() != value.ApplicationUserId)
            {
                return BadRequest("This is not your value");
            }

            Mapper.CreateMap<Value, ValueResponse>();
            return Ok(Mapper.Map<ValueResponse>(value));
        }

        // PUT: api/Values/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutValue(int id, ValueRequest valueRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var value = db.Values.Find(id);

            if (User.Identity.GetUserId() != value.ApplicationUserId)
            {
                return BadRequest("This is not your value");
            }
            Mapper.CreateMap<ValueRequest, Value>();
            value = Mapper.Map<ValueRequest,Value>(valueRequest,value);

            db.Entry(value).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Values
        [ResponseType(typeof(Value))]
        public IHttpActionResult PostValue(ValueRequest valueRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Mapper.CreateMap<ValueRequest, Value>();
            var value = Mapper.Map<Value>(valueRequest);
            // Set creation date
            value.CreationDate = DateTime.Now;
            value.ApplicationUserId = User.Identity.GetUserId();
            db.Values.Add(value);
            db.SaveChanges();

            Mapper.CreateMap<Value, ValueResponse>();
            return CreatedAtRoute("DefaultApi", new { id = value.ValueId }, Mapper.Map<ValueResponse>(value));
        }

        // DELETE: api/Values/5
        [ResponseType(typeof(Value))]
        public IHttpActionResult DeleteValue(int id)
        {
            Value value = db.Values.Find(id);
            if (value == null)
            {
                return NotFound();
            }
            if (User.Identity.GetUserId() != value.ApplicationUserId)
            {
                return BadRequest("This is not your value");
            }

            db.Values.Remove(value);
            db.SaveChanges();

            Mapper.CreateMap<Value, ValueResponse>();
            return Ok(Mapper.Map<ValueResponse>(value));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ValueExists(int id)
        {
            return db.Values.Count(e => e.ValueId == id) > 0;
        }
    }
}