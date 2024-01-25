import { NextResponse, NextRequest } from 'next/server';

const data = [
  {
    id: 1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Indonesia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    title: 'Mobile Developer',
    time: 'Now',
    location: 'Malaysia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 3,
    title: 'UI Desaigner',
    time: '14Hr',
    location: 'Malaysia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 4,
    title: 'Back-end Developer',
    time: '5Hr',
    location: 'Canada',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 5,
    title: 'Mobile Developer',
    time: '24Hr',
    location: 'Malaysia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 6,
    title: 'Enginner',
    time: 'Now',
    location: 'Malaysia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 7,
    title: 'Event Relation Ship',
    time: '1Hr',
    location: 'Indonesia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  },
  {
    id: 8,
    title: 'Desktop Developer',
    time: '3Hr',
    location: 'Indonesia',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!',
    company: 'Novac Linus Co.'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: 'Mengambil Data Product',
        data: detailProduct
      });
    }

    return NextResponse.json(
      {
        status: 400,
        message: 'Not Found',
        data: {}
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    status: 200,
    message: 'Mengambil Data Product',
    data
  });
}
