import { BlogList } from "../_components/blog/BlogList";

export default function Blog() {
  return (
    <div className="">
      <h1 className="font-semibold pb-4">
        {"Things I'm Thinking About"}
      </h1>
      <BlogList/>
    </div>
  );
}
