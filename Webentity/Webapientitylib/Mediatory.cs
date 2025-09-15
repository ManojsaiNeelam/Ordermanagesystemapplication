using Webapientitylib.Models;

namespace Webapientitylib
{
    public class Mediatory
    {
        private readonly CustomerContext _customerContext;

        public Mediatory(CustomerContext customerContext)
        {
            _customerContext = customerContext;
        }


        public List<Shippermodel> GetAllShippers()
        {
            //Linq => Language Integrated Query

            var result = _customerContext.Shippers
                .Select(shipper => new Shippermodel
                {

                    ShipperId = shipper.ShipperId,
                    ShipperName = shipper.ShipperName,
                    Phone = shipper.Phone
                }).ToList();
            return result;

        }

        public List<Shippermodel> GetShipperDetailsById(int iShipperId)
        {
            //Linq => Language Integrated Query

            var result = _customerContext.Shippers
                .Select(shipper => new Shippermodel
                {

                    ShipperId = shipper.ShipperId,
                    ShipperName = shipper.ShipperName,
                    Phone = shipper.Phone
                })
                .Where(S => S.ShipperId == iShipperId)
                .ToList();

            return result;

        }
        public List<Suppliermodel> GetAllSuppliers()
        {
            var result = _customerContext.Suppliers
                .Select(Supplier => new Suppliermodel
                {
                    SupplierId = Supplier.SupplierId,
                    SupplierName = Supplier.SupplierName,
                    ContactName = Supplier.ContactName,
                    Address = Supplier.Address,
                    City = Supplier.City,
                    PostalCode = Supplier.PostalCode,
                    Country = Supplier.Country,
                    Phone = Supplier.Phone
                }).ToList();
            return result;
        }

        public List<Suppliermodel> GetSupplierDetailsbyID(int iSupplierID)
        {
            var result = _customerContext.Suppliers
               .Select(Supplier => new Suppliermodel
               {
                   SupplierId = Supplier.SupplierId,
                   SupplierName = Supplier.SupplierName,
                   ContactName = Supplier.ContactName,
                   Address = Supplier.Address,
                   City = Supplier.City,
                   PostalCode = Supplier.PostalCode,
                   Country = Supplier.Country,
                   Phone = Supplier.Phone
               })
                .Where(Sup => Sup.SupplierId == iSupplierID)
                .ToList();

            return result;
        }

        public List<Customermodel> GetAllCustomers()
        {
            var result = _customerContext.Customers
                .Select(Customer => new Customermodel
                {
                    CustomerId = Customer.CustomerId,
                    CustomerName = Customer.CustomerName,
                    ContactName = Customer.CustomerName,
                    Address = Customer.Address,
                    City = Customer.City,
                    PostalCode = Customer.PostalCode,
                    Country = Customer.Country,
                }).ToList();
            return result;
        }
        public List<Customermodel> GetCustomerdetailsbyID(int iCustomerId)
        {
            var result = _customerContext.Customers
                .Select(Customer => new Customermodel
                {
                    CustomerId = Customer.CustomerId,
                    CustomerName = Customer.CustomerName,
                    ContactName = Customer.CustomerName,
                    Address = Customer.Address,
                    City = Customer.City,
                    PostalCode = Customer.PostalCode,
                    Country = Customer.Country,
                })
                 .Where(C => C.CustomerId == iCustomerId)
                .ToList();
            return result;
        }
        public List<Categorymodel> GetAllCategories()
        {
            var result = _customerContext.Categories
                .Select(Category => new Categorymodel
                {
                    CategoryId = Category.CategoryId,
                    CategoryName = Category.CategoryName,
                    Description = Category.Description,

                }).ToList();
            return result;
        }
        public List<Categorymodel> GetCategorydetailsbyId(int iCategoryId)
        {
            var result = _customerContext.Categories
                .Select(Category => new Categorymodel
                {
                    CategoryId = Category.CategoryId,
                    CategoryName = Category.CategoryName,
                    Description = Category.Description,

                })
                .Where(Ca => Ca.CategoryId == iCategoryId)
                .ToList();
            return result;
        }


        public List<Employeemodel> GetAllEmployees()
        {
            var result = _customerContext.Employees
                .Select(Employee => new Employeemodel
                {
                    EmployeeId = Employee.EmployeeId,
                    LastName = Employee.LastName,
                    FirstName = Employee.FirstName,
                    BirthDate = Employee.BirthDate,
                    Photo = Employee.Photo,
                    Notes = Employee.Notes,
                }).ToList();
            return result;
        }
        public List<Employeemodel> GetEmployeedetailsbyId(int iEmployeeId)
        {
            var result = _customerContext.Employees
               .Select(Employee => new Employeemodel
               {
                   EmployeeId = Employee.EmployeeId,
                   LastName = Employee.LastName,
                   FirstName = Employee.FirstName,
                   BirthDate = Employee.BirthDate,
                   Photo = Employee.Photo,
                   Notes = Employee.Notes,
               })
                .Where(E => E.EmployeeId == iEmployeeId)
               .ToList();
            return result;
        }
        public List<Orderdetailmodel> GetAllOrderdetails()
        {
            var result = _customerContext.OrderDetails
                .Select(Orderdetails => new Orderdetailmodel
                {
                    OrderDetailId = Orderdetails.OrderDetailId,
                    OrderId = Orderdetails.OrderDetailId,
                    ProductId = Orderdetails.ProductId,
                    Quantity = Orderdetails.Quantity,
                }).ToList();
            return result;
        }
        public List<Orderdetailmodel> GetOrderdetailbyId(int iOrderdetailId)
        {
            var result = _customerContext.OrderDetails
               .Select(Orderdetails => new Orderdetailmodel
               {
                   OrderDetailId = Orderdetails.OrderDetailId,
                   OrderId = Orderdetails.OrderDetailId,
                   ProductId = Orderdetails.ProductId,
                   Quantity = Orderdetails.Quantity,
               })
                .Where(Or => Or.OrderDetailId == iOrderdetailId)
                .ToList();
            return result;
        }
        public List<Ordermodel> GetAllOrders()
        {
            var result = _customerContext.Orders
                .Select(Orders => new Ordermodel
                {
                    OrderId = Orders.OrderId,
                    CustomerId = Orders.CustomerId,
                    EmployeeId = Orders.EmployeeId,
                    OrderDate = Orders.OrderDate,
                    ShipperId = Orders.ShipperId,
                }).ToList();
            return result;
        }
        public List<Ordermodel> GetOrdersbyId(int iOrderId)
        {

            var result = _customerContext.Orders
               .Select(Orders => new Ordermodel
               {
                   OrderId = Orders.OrderId,
                   CustomerId = Orders.CustomerId,
                   EmployeeId = Orders.EmployeeId,
                   OrderDate = Orders.OrderDate,
                   ShipperId = Orders.ShipperId,
               })
               .Where(Ord => Ord.OrderId == iOrderId)
               .ToList();
            return result;
        }
        public List<Productmodel> GetAllProducts()
        {
            var result = _customerContext.Products
                .Select(Products => new Productmodel
                {
                    ProductId = Products.ProductId,
                    ProductName = Products.ProductName,
                    SupplierId = Products.SupplierId,
                    CategoryId = Products.CategoryId,
                    Unit = Products.Unit,
                    Price = Products.Price,
                }).ToList();
            return result;
        }
        public List<Productmodel> GetProductsbyId(int iProductId)
        {
            var result = _customerContext.Products
                  .Select(Products => new Productmodel
                  {
                      ProductId = Products.ProductId,
                      ProductName = Products.ProductName,
                      SupplierId = Products.SupplierId,
                      CategoryId = Products.CategoryId,
                      Unit = Products.Unit,
                      Price = Products.Price,
                  })
                  .Where(P => P.ProductId == iProductId)
                  .ToList();
            return result;
        }


    }
}
