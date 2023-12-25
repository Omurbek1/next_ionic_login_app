import { DefaultSession } from "next-auth";
import "./page.module.css";
// Default Session TYPE

export function UserCard({ user }: { user: DefaultSession["user"] }) {
  console.log(user);
  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <p>Current Logged In User</p>
        <img src={user?.image} alt={user?.name} />
        <h5 className='card-title'>{user?.name}</h5>
        <p className='card-text'>{user?.email}</p>
      </div>
    </div>
  );
}
