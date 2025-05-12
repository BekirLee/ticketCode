import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../../features/products/Products";

const Admin = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!formData.name || !formData.description || !formData.price) return;
    dispatch(createProduct(formData));
    setFormData({ name: "", description: "", price: "",image:"" });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Desc</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            type="string"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit" className="mt-2">
          Add
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Some</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price} $</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product._id)}
                  >
                    Deletee
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
