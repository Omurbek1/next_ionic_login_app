import Image from "next/image";
import styles from "./page.module.css";
import Login from "./Login";

// localhost:3000

export default function Home() {
  return (
    <div style={{ margin: "20px 20px 20px 20px", padding: "30px" }}>
      <h3>Login Website</h3>
      <Login />
    </div>
  );
}
