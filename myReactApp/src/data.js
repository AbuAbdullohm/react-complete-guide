import MyImg from "./assets/logo192.png";

export const CORE_CONCEPTS = [
  {
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components",
    image: MyImg,
  },
  {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML code to define the actualmarkup that will be rendered",
    image: MyImg,
  },
  {
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them",
    image: MyImg,
  },
  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update",
    image: MyImg,
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building block of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
    function Welcome(){
      return <h1>Hello, world!</h1>;
    }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to Javascript. It is similar to a template language, but it has full power of JavaScript (e.g. it may output dynamic content).",
    code: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React</p>
    </div>
    `,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like a function arguments.",
    code: `
    function Welcome(props){
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to changetheir output over time in response to user action, network responses, and anything else.",
    code: `
    function Counter(){
      const [isVisible, setIsVisible] = useState(false);

      function handleClick(){
        setIsVisible(true);
      }

      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details</p>}
        </div>
      );
    }`,
  },
};
