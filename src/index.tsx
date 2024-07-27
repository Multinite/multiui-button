import { createComponent } from "@multinite_official/multiui";
import { Button } from "./Button";
import { ButtonLabel } from "./ButtonLabel";

namespace ButtonComponent {
  export const name = "Button";
  export const version = "1.0.0";
  export const description = "Hello, World!";
}

export { ButtonComponent, Button, ButtonLabel };

createComponent({
  name: "Button",
  version: "1.0.0",
  description: "Hello, World!",
  components: ["Button", "ButtonLabel"],
  dependant_components: ["ButtonLabel"],
});
