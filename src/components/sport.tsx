'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/podium.jpg',
      alt: 'Dağ bisikleti yarışından sonra podyumda',
      caption: 'Ünlü Roc d\'Azur\'da 3. olarak podyum kutlaması',
    },
    {
      src: '/levens.JPG',
      alt: 'Levens\'te yarışırken',
      caption: 'Levens\'teki dağ bisikleti dünya kupasında temiz koşullarda yarışırken ahah',
    },
    {
      src: '/marseille.JPG',
      alt: 'Marsilya\'da yarışırken',
      caption: 'Marsilya Dünya Kupası\'nda sınırları zorluyorum',
    },
    {
      src: '/transmo.JPG',
      alt: 'Transmaurienne\'de yarışırken',
      caption: 'Fransız Alpleri\'ndeki Transmaurienne Yarışı için başlangıç çizgisinde',
    },
    {
      src: '/ploeuc.jpg',
      alt: 'Dünya Kupası\'nda yarışırken',
      caption: 'Ploeuc\'teki Fransa şampiyonası',
    },
    {
      src: '/gueret.jpg',
      alt: 'Dünya Kupası\'nda yarışırken',
      caption: 'Gueret\'teki Dünya Kupası',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Spor Kariyerim
        </h2>
        <p className="mt-4 text-muted-foreground">
          Yazılım geliştirmeye odaklanmadan önce, dağ bisikletinde yüksek seviyede yarıştım, 
          Junior Dünya Kupası'nda İlk 15'e ve Fransa Kupası'nda İlk 10'a girdim. İşte atletik 
          yolculuğumdan bazı önemli anlar.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;