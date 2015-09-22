namespace AngularMaterialDotNet.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserToValueGuid : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Values", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Values", new[] { "ApplicationUser_Id" });
            DropColumn("dbo.Values", "ApplicationUserId");
            RenameColumn(table: "dbo.Values", name: "ApplicationUser_Id", newName: "ApplicationUserId");
            AlterColumn("dbo.Values", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.Values", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Values", "ApplicationUserId");
            AddForeignKey("dbo.Values", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Values", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.Values", new[] { "ApplicationUserId" });
            AlterColumn("dbo.Values", "ApplicationUserId", c => c.String(maxLength: 128));
            AlterColumn("dbo.Values", "ApplicationUserId", c => c.Int(nullable: false));
            RenameColumn(table: "dbo.Values", name: "ApplicationUserId", newName: "ApplicationUser_Id");
            AddColumn("dbo.Values", "ApplicationUserId", c => c.Int(nullable: false));
            CreateIndex("dbo.Values", "ApplicationUser_Id");
            AddForeignKey("dbo.Values", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
