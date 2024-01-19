namespace Ecart.Domain.Entity
{
    public class Product: BaseEntity
    {
        public string Name { get; set; }

        public decimal Price { get; set; }

        public int NumberOfStock { get; set; }
        public string Description { get; set; }

        public bool Discount { get; set; }

        public decimal DiscountPrice { get; set; }

        public bool status { get; set; }
    }
}
