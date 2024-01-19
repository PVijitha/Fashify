namespace Ecart.Domain.Entity
{
    public class OrderDetails: BaseEntity
    {
        public Guid ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductDescription { get; set; }

        public decimal Price { get; set; }

        public Guid PaymentId { get; set; }

        public int ProductQuantity { get; set; }

        public bool Status { get; set; }

        public Guid UserId { get; set; }
    }
}
