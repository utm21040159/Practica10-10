
import './App.css';
import {Login} from './components/Login';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { RegisterParticipant } from './components/RegisterParticipant';
import { CreateEvent } from './admins/CreateEvent';
import { RegisterTeam } from './components/RegisterTeam';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterParticipant/>,
  },
  {
    path: "/event",
    element: < CreateEvent/>,                                                         
  },
  {
    path: "/team",
    element: <RegisterTeam/>,                                                         
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;

