import AlwaysRenderedPhoto from "./AlwaysRenderedPhoto";
import AwesomeNFTOwnersOnlyPhoto from "./AwesomeNFTOwnersOnlyPhoto";

const Photos = () => {
  return (
    <div className="flex mt-8 gap-2">
      <AlwaysRenderedPhoto />
      <AwesomeNFTOwnersOnlyPhoto />
    </div>
  );
};

export default Photos;
