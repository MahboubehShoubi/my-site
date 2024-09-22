import Dashboard from "@/layout/Dashboard";
import styles from "@/layout/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
      <Dashboard />
    </div>
  );
}

export default Layout;
