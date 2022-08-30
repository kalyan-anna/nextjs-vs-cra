import type { NextPage } from 'next';
import { SiteLayout } from '../layouts/SiteLayout';

const Home: NextPage = () => {
  return (
    <SiteLayout>
      {/* <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <article className="flex flex-col shadow my-4">
          <div className="bg-white flex flex-col justify-start p-6">
            <a
              href="#"
              className="text-blue-700 text-sm font-bold uppercase pb-4"
            >
              Technology
            </a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
              Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
            </a>
            <a href="#" className="text-sm pb-3">
              By{' '}
              <a href="#" className="font-semibold hover:text-gray-800">
                Kalyan Annamalai
              </a>
              , Published on August
               30th, 2022
            </a>
            <a href="#" className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
              iaculis dui porta volutpat. In sit amet posuere magna..
            </a>
            <a href="#" className="uppercase text-gray-800 hover:text-black">
              Continue Reading <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      </section> */}
    </SiteLayout>
  );
};

export default Home;
