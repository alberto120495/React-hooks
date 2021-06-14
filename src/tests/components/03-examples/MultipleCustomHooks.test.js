import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch"); //No usa el useFetch, usa una implementacion
//jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  /*  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });
 */
  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de msotrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Alberto",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    //console.log(wrapper.html());
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Alberto");
  });
});
