namespace SportsStore.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class volkan : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        OrderID = c.Int(nullable: false, identity: true),
                        OrderItem = c.String(),
                        OrderShipToName = c.String(),
                        OrderShipToAddressLine1 = c.String(),
                        OrderShipToAddressLine2 = c.String(),
                        OrderShipToAddressLine3 = c.String(),
                        OrderShipToCity = c.String(),
                        OrderShipToAddressState = c.String(),
                        OrderShipToZip = c.String(),
                        OrderShipToCountry = c.String(),
                        OrderGiftWrap = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.OrderID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Orders");
        }
    }
}
