import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

function getAlbums() {
  const albumsDir = path.join(process.cwd(), "public/images/albums");
  const albumNames = fs.readdirSync(albumsDir).filter((name) => {
    return fs.statSync(path.join(albumsDir, name)).isDirectory();
  });
  return albumNames.map((album) => {
    const albumPath = path.join(albumsDir, album);
    const images = fs
      .readdirSync(albumPath)
      .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i));
    return {
      name: album,
      thumbnail: images[0] ? `/images/albums/${album}/${images[0]}` : null,
      description: `Photos from ${album}`,
    };
  });
}

export default function AlbumsPage() {
  const albums = getAlbums();
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold text-center">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {albums.map((album) => (
          <Link href={`/albums/${album.name}`} key={album.name} className="block group">
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              {album.thumbnail && (
                <Image
                  src={album.thumbnail}
                  alt={album.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary-color)] transition-colors">{album.name}</h2>
                <p className="text-gray-600">{album.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 