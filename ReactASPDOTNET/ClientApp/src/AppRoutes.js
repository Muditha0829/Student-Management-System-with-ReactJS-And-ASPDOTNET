import Students from "./components/Students";
import Edit from "./components/Edit";
import { Home } from "./components/Home";
import New from "./components/New";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/students',
    element: <Students />
  },
  {
    path: '/edit/:id',
    element: <Edit />
  },
  {
    path: '/new',
    element: <New />
  }
];

export default AppRoutes;
