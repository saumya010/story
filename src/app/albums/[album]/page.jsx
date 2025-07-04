import fs from "fs";
import path from "path";
import Image from "next/image";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const albumsDir = path.join(process.cwd(), "public/images/albums");
  const albumNames = fs.readdirSync(albumsDir).filter((name) => {
    return fs.statSync(path.join(albumsDir, name)).isDirectory();
  });
  return albumNames.map((name) => ({ album: name }));
}

function getAlbumImages(album) {
  const albumPath = path.join(process.cwd(), "public/images/albums", album);
  if (!fs.existsSync(albumPath)) return [];
  return fs
    .readdirSync(albumPath)
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i))
    .map((file) => `/images/albums/${album}/${file}`);
}

export default function AlbumPage({ params }) {
  const { album } = params;
  const images = getAlbumImages(album);
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold text-center">{album}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div key={i} className="rounded overflow-hidden shadow">
            <Image
              src={img}
              alt={`Photo ${i + 1} from ${album}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 