namespace SportsStore.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class eligul : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "StockAmount", c => c.Int(nullable: false));
            AddColumn("dbo.Products", "IsActive", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "IsActive");
            DropColumn("dbo.Products", "StockAmount");
        }
    }
}
