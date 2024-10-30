import TilePack from "./View";
import Upload from "./Upload";

export default function ViewOrUpload({ params }: { params: { id: string[] } }) {
  const id = params.id[0];

  if (id === 'upload') {
    return <Upload />;
  } else {
    return <TilePack id={id} />;
  }
}
