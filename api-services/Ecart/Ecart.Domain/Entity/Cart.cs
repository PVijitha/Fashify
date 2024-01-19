namespace Ecart.Domain.Entity
{
    public class Cart: BaseEntity
    {
        public Guid UserId { get; set; }

        public Guid ProductId { get; set; }

        public int ProductQuantity { get; set; }
    }
}
