import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-1 flex-col justify-center text-center text-pretty max-w-[50ch] mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>
        Hello, and thank you for visiting!
      </h1>
      <p className='text-fd-muted-foreground text-pretty'>
        This site showcases my technical writing skills, demonstrating my
        ability to structure and present clear, effective documentation.
      </p>
      <p className='text-fd-muted-foreground text-pretty mt-4'>
        Explore the{' '}
        <Link
          href='/docs'
          className='text-fd-foreground font-semibold underline'
        >
          /docs
        </Link>{' '}
        section for a sample of my work.
      </p>
      <p className='text-fd-muted-foreground text-pretty mt-4'>
        I am keen to contribute to <span className='font-bold'>Antmicro’s</span>{' '}
        work in open-source computing. If you have any questions or would like
        to discuss my experience further, please get in touch.
      </p>
    </main>
  );
}
