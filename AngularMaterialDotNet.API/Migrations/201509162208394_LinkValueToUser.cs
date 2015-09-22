namespace AngularMaterialDotNet.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LinkValueToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Values", "ApplicationUserId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Values", "ApplicationUserId");
        }
    }
}
