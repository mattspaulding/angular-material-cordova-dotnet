namespace AngularMaterialDotNet.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserToValue : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Values", "ApplicationUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Values", "ApplicationUser_Id");
            AddForeignKey("dbo.Values", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Values", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Values", new[] { "ApplicationUser_Id" });
            DropColumn("dbo.Values", "ApplicationUser_Id");
        }
    }
}
