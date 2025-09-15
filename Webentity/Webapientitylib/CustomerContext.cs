using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Webapientitylib.Entities;

namespace Webapientitylib;

public partial class CustomerContext : DbContext
{
    public CustomerContext(DbContextOptions<CustomerContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Shipper> Shippers { get; set; }

    public virtual DbSet<Supplier> Suppliers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Categori__19093A2BFDE4D4B3");

            entity.Property(e => e.CategoryId)
                .ValueGeneratedNever()
                .HasColumnName("CategoryID");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PK__Customer__A4AE64B8C4D8F3A4");

            entity.Property(e => e.CustomerId)
                .ValueGeneratedNever()
                .HasColumnName("CustomerID");
            entity.Property(e => e.Address)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.ContactName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Country)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.CustomerName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.PostalCode)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Employee__7AD04FF10F7FAC64");

            entity.Property(e => e.EmployeeId)
                .ValueGeneratedNever()
                .HasColumnName("EmployeeID");
            entity.Property(e => e.BirthDate)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Notes)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Photo)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__Orders__C3905BAFBC256AC3");

            entity.Property(e => e.OrderId)
                .ValueGeneratedNever()
                .HasColumnName("OrderID");
            entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.OrderDate)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.ShipperId).HasColumnName("ShipperID");

            entity.HasOne(d => d.Customer).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__Orders__Customer__44FF419A");

            entity.HasOne(d => d.Employee).WithMany(p => p.Orders)
                .HasForeignKey(d => d.EmployeeId)
                .HasConstraintName("FK__Orders__Employee__45F365D3");

            entity.HasOne(d => d.Shipper).WithMany(p => p.Orders)
                .HasForeignKey(d => d.ShipperId)
                .HasConstraintName("FK__Orders__ShipperI__46E78A0C");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.OrderDetailId).HasName("PK__OrderDet__D3B9D30C2CF7792D");

            entity.Property(e => e.OrderDetailId)
                .ValueGeneratedNever()
                .HasColumnName("OrderDetailID");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__OrderDeta__Order__49C3F6B7");

            entity.HasOne(d => d.Product).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__OrderDeta__Produ__4AB81AF0");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__Products__B40CC6ED2C1D2832");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("ProductID");
            entity.Property(e => e.CategoryId).HasColumnName("CategoryID");
            entity.Property(e => e.Price)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.ProductName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.SupplierId).HasColumnName("SupplierID");
            entity.Property(e => e.Unit)
                .HasMaxLength(300)
                .IsUnicode(false);

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__Products__Catego__4222D4EF");

            entity.HasOne(d => d.Supplier).WithMany(p => p.Products)
                .HasForeignKey(d => d.SupplierId)
                .HasConstraintName("FK__Products__Suppli__412EB0B6");
        });

        modelBuilder.Entity<Shipper>(entity =>
        {
            entity.HasKey(e => e.ShipperId).HasName("PK__Shippers__1F8AFFB929A825E7");

            entity.Property(e => e.ShipperId)
                .ValueGeneratedNever()
                .HasColumnName("ShipperID");
            entity.Property(e => e.Phone)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.ShipperName)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Supplier>(entity =>
        {
            entity.HasKey(e => e.SupplierId).HasName("PK__Supplier__4BE66694C8C24CE8");

            entity.Property(e => e.SupplierId)
                .ValueGeneratedNever()
                .HasColumnName("SupplierID");
            entity.Property(e => e.Address)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.ContactName)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Country)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Phone)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.PostalCode)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.SupplierName)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
