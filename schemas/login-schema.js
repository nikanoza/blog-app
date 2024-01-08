import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .test(
      "endsWithRedberry",
      'Email must end with "@redberry.ge"',
      function (value) {
        return value.endsWith("@redberry.ge");
      }
    )
    .required("Email is required"),
});

export default loginSchema;
