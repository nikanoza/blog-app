import * as Yup from "yup";

const georgianLettersRegex = /^[ა-ჰ\s]+$/;

const newBlogSchema = Yup.object().shape({
  title: Yup.string().length(2).trim().required(),
  description: Yup.string().length(2).trim().required(),
  author: Yup.string()
    .trim()
    .length(4)
    .test("minimum-words", "String must have at least 2 words", (value) => {
      const words = value.split(/\s+/).filter((word) => word.length > 0);
      return words.length >= 2;
    })
    .matches(georgianLettersRegex, "String must contain only Georgian letters")
    .required(),
  publish_date: Yup.date().required(),
  categories: Yup.array()
    .min(1, "Array must not be empty")
    .of(Yup.number().required("Each element must be a number")),
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

export default newBlogSchema;
