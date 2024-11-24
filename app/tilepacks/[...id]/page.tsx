import TilePack from "./View";
import Upload from "./Upload";

export default async function ViewOrUpload(props: { params: Promise<{ id: string[] }> }) {
  const params = await props.params;
  const id = params.id[0];

  if (id === 'upload') {
    return <Upload />;
  } else {
    return <TilePack id={id} />;
  }
}
