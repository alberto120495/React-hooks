import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";
const setUser = jest.fn();

describe("Pruebas en <LoginScreen/>", () => {
  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );
  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").simulate("click");

    expect(setUser).toHaveBeenCalledWith({ id: 1234, name: "alberto" });
  });
});
