import Image from "next/image";

const AlwaysRenderedPhoto = () => (
  <Image
    src="https://cdn-id8r.b-cdn.net/wp-content/uploads/2023/03/alien_not_wavy.png"
    alt="always-rendered"
    width={256}
    height={256}
    className="border-4 border-white rounded-lg"
  />
);

export default AlwaysRenderedPhoto;
