import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import { SiContainerd } from "react-icons/si";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Table from "../components/Table";
import ProductCard from "../components/ProductCard";

export default function Components() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];
  return (
    <div>
      <Container id="dashboard-container">
        <PageHeader title="Components" />
        <p>Ini adalah halaman Komponen.</p>

        <Button>simpan</Button>
        <Button type="secondary">batal</Button>
        <Button type="success">berhasil</Button>
        <Button type="danger">hapus</Button>
        <Button type="warning">peringatan</Button>

        <div className="flex gap-2 mt-2">
          <Card>
            <h2 className="text-xl font-bold">Judul Card</h2>
            <p className="text-gray-600">Ini adalah isi dari card.</p>
          </Card>
        </div>
        <Table headers={headers}>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-3">{index + 1}</td>

              <td className="border px-4 py-3">{product.name}</td>

              <td className="border px-4 py-3">{product.category}</td>

              <td className="border px-4 py-3">{product.price}</td>

              <td className="border px-4 py-3 mt-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </Table>
        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
        />
      </Container>

      <div className="flex gap-2 mt-2">
        <Badge type="primary">Selesai</Badge>
        <Badge type="secondary">secondary</Badge>
        <Badge type="success">Berhasil</Badge>
        <Badge type="danger">gagal</Badge>
        <Badge type="warning">peringatan</Badge>
      </div>

      <div className="flex gap-2 mt-2">
        <Avatar name="Selesai" />
        <Avatar name="Budi Santoso" />
        <Avatar name="Agus Wijaya" />
        <Avatar name="Dewi Lestari" />
      </div>
      <Footer />
    </div>
  );
}
