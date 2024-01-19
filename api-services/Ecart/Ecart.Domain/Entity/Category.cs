namespace Ecart.Domain.Entity
{
    public class Category: BaseEntity
    {
        public Guid ProductId { get; set; }

        public string Name { get; set; }
    }
}
