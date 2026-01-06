import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AppLoader from "./components/common/AppLoader";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import Sidebar from "./components/common/Sidebar";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, user, logout } =
    useAuth0();

  if (isLoading) {
    return <AppLoader loaderText="Sign in" />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <DashboardLayout sidebar={<Sidebar user={user} logout={logout} />}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore, facere repellat? Odit, ipsa
        possimus! Delectus dolor aliquam quidem vitae earum perspiciatis iste
        quisquam dolorem magnam accusamus quia, eos temporibus illo.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore, facere repellat?
        Odit, ipsa possimus! Delectus dolor aliquam quidem vitae earum
        perspiciatis iste quisquam dolorem magnam accusamus quia, eos temporibus
        illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        facere repellat? Odit, ipsa possimus! Delectus dolor aliquam quidem
        vitae earum perspiciatis iste quisquam dolorem magnam accusamus quia,
        eos temporibus illo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore, facere repellat? Odit, ipsa possimus! Delectus dolor
        aliquam quidem vitae earum perspiciatis iste quisquam dolorem magnam
        accusamus quia, eos temporibus illo.
      </div>
    </DashboardLayout>
  );
}

export default App;
