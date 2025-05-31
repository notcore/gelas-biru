import React from 'react';
import Glass from '@/components/elements/Glass'; 

const InfiniteScroll = () => {
  // ! JANGAN DIHAPUS INI BAGIAN PATHNYA
    const path = "/resource/img/";
// ==============================================================
  // taruh gambarnya disni bagian "source" samping ${path} bang,
  //  gak usah susah" costume codinganya.
  // usahain format webp biar gak berat.
  const items = [
    { id: 1, source: `${path}gambar1.jpeg` },
    { id: 2, source: `${path}gambar2.jpeg` },
    { id: 3, source: `${path}gambar3.jpeg` },
    // kalo mau tambah copy aja { id: ... } terus ganti idnya
  ];
// ===============================================================

// kalo mau costume style disini tapi ini bukan satu-satunya belum ke inti.
  return (
    <div className="relative overflow-hidden mt-16">
      <div className="flex animate-scroll-x">
        {items.map((item) => (
          <Glass key={`original-${item.id}`} source={`${item.source}`} className="mx-1" />
        ))}
        {items.map((item) => (
          <Glass key={`original-${item.id}`} source={`${item.source}`} className="mx-1" />
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} source={`${item.source}`} className="mx-1" />
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} source={`${item.source}`} className="mx-1" />
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} source={`${item.source}`} className="mx-1" />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;