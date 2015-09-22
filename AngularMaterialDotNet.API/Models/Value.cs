using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Http.Description;
using System.Web.Mvc;

namespace AngularMaterialDotNet.API.Models
{
    public class Value
    {
        public int ValueId { get; set; }
        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
        [Required]
        [MaxLength(100)]
        public string Description { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        [JsonIgnore]
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
    public class ValueRequest
    {
        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
        [Required]
        [MaxLength(100)]
        public string Description { get; set; }
    }
    public class ValueResponse
    {
        public int ValueId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

}
