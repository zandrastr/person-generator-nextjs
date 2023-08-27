interface Params {
  params: { name: string };
}

export default function Page({ params }: Params) {
  return <main> {params.name} </main>;
}
