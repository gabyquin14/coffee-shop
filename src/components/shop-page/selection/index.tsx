import { FC } from "react";
import "./selection-all.css";
import SelectionCard from "../selection-card";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../../redux/store";

export const Selection: FC = () => {
  const coffees = useAppSelector((state) => state.info.coffees);

  return (
    <>
      <div className="selection-all selection-grid fade-up">
        {coffees?.map((coffee) => (
          <SelectionCard coffee={coffee} key={coffee.id} />
        ))}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Selection;
