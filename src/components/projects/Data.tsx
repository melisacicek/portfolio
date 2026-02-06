import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Synto',
    description:
      'Synto, karmaşık blokzincir etkileşimlerini basit, doğal dil komutlarına dönüştüren yapay zeka destekli bir arayüzdür. Token göndermek, varlıkları stake etmek, madeni paraları takas etmek veya hatta NFT\'ler veya likidite havuzları oluşturmak istiyorsanız, Synto\'ya ne yapacağını söyleyin — manuel cüzdan etkileşimi yok, teknik jargon yok. Şimdiye kadarki en büyük projelerimden biri',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'Web3.js',
      'shadcn-ui',
      'TypeScript',
      'Phantom Wallet',
      'OpenAI API',
      'Vercel AI SDK',
      'Solana Agent kit',
      'Neon',
      'Prisma'
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://synto.fun',
      },
      {
        name: 'Launch Video',
        url: 'https://www.youtube.com/watch?v=4QUE2KgKDUw',
      },
      {
        name: 'X',
        url: 'https://x.com/chainSynto',
      },
      {
        name: 'Technical Video',
        url: 'https://www.youtube.com/watch?v=1CjBLKPUwtA&feature=youtu.be',
      },
      {
        name: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1B3m44mEgv81rJHfjNfTKi147yX4raQed/view?usp=sharing',
      },
      {
        name: 'Usage tutorial',
        url: 'https://www.youtube.com/watch?v=PRu1cfvT2bA',
      }
    ],
    images: [
      {
        src: '/synto1.png',
        alt: 'Synto landing page',
      },
      {
        src: '/synto2.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto3.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto4.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto5.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto6.png',
        alt: 'Synto chat interface',
      },
    ],
  },
  {
    title: 'Rrate',
    description:
      "Rrate, kullanıcıların maaşını dünyadaki en zengin insanlarla karşılaştırmasına izin veren eğlenceli bir web sitesidir. Şimdi deneyiniz, çevrimiçi!",
    techStack: ['Html', 'Css', 'Javascript'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://rrate.app',
      },
      {
        name: 'github',
        url: 'https://github.com/toukoum/Rrate',
      },
    ],
    images: [
      {
        src: '/rrate1.png',
        alt: 'Rrate landing page',
      },
      {
        src: '/rrate2.png',
        alt: 'Rrate comparison page',
      },
      {
        src: '/rrate3.png',
        alt: 'Rrate comparison page',
      },
    ],
  },
  {
    title: 'Defai',
    description:
      "DEFAI oluşturarak ETHOXford hackathon'ı kazandık. DEFAI, Merkezi Olmayan Finans Yapay Zekası anlamına gelir. Kullanıcıların doğal dili kullanarak etkileşim kurmasına izin vererek Avalanche blokzincirinde zincir üstü işlemleri basitleştiren yapay zeka destekli bir sohbet arayüzüdür. Bu, karmaşık DeFi işlemlerini sınırlı teknik uzmanlığa sahip olanlar için bile erişilebilir hale getirir.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Vercel AI SDK',
      'TypeScript',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://dorahacks.io/buidl/22605',
      },
      {
        name: 'github',
        url: 'https://github.com/toukoum/DEFAI',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7299337190151483392/',
      },
      {
        name: 'Youtube Video',
        url: 'https://www.youtube.com/watch?v=N9O7los4-ng&t=34s&ab_channel=Toukoum',
      }
    ],
    images: [
      {
        src: '/defai1.png',
        alt: 'Landing Page of Defai',
      },
      {
        src: '/defai2.png',
        alt: 'Confirmation popup of Defai',
      },
      {
        src: '/defai3.png',
        alt: 'Chatbot of Defai',
      },
      {
        src: '/defai4.jpeg',
        alt: 'Winner team',
      },
    ],
  },
  {
    title: 'Fitgear',
    description:
      'Fitgear oluşturarak Gotta Go Hack IA kazandık. Müşteriler ve satıcılar arasındaki oranı iyileştirmek için QR kodu ile erişilebilen sanal bir ses satıcısı. API çağrıları ve doğal dil etkileşimleri için bir RAG sistemiyle yapay zeka boru hattı oluşturduk.',
    techStack: ['Next.js', 'TailwindCSS', 'OpenAI API', 'Langchain'],
    date: '2024',
    links: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/posts/raphael-giraud-60939519a_hackathon-innovation-sporttech-activity-7210399263774674946-qSXq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC6vwikBVSEkS7XWktWS7y6GR3GHwAlKslc',
      },
    ],
    images: [
      {
        src: '/fitgear2.png',
        alt: 'Fitgear chatbot',
      },
      {
        src: '/fitgear1.png',
        alt: 'Fitgear landing page',
      },
    ],
  },
  {
    title: 'Datai',
    description:
      "DATAI, teknik olmayan kullanıcıların SQL yazmadan doğal dili kullanarak veritabanını sorgulamalarına izin veren yapay zeka destekli bir ajanttır. Next.js, TailwindCSS, shadcn-ui ve Anthropic'in Claude API'si kullanılarak oluşturulan bu proje, basitlik, hız ve kullanıcı dostu tasarıma odaklanır.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Claude API',
      'TypeScript',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/datai',
      },
      {
        name: 'Youtube Video Demo',
        url: 'https://youtu.be/iE0RXjdbQsw',
      }
    ],
    images: [
      {
        src: '/datai1.png',
        alt: 'Datai landing page',
      },
      {
        src: '/datai2.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai3.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai4.png',
        alt: 'Datai chatbot',
      }
    ],
  },
  {
    title: '3d Pong Game',
    description:
      "Transcendance, 42 müfredatımın son projesidir. Çok oyunculu yeteneklere, kullanıcı kimlik doğrulamasına ve gerçek zamanlı oynanışa sahip 3D bir pong oyunudur. Her şeyi sıfırdan yapmak zorundaydık, bu yüzden oldukça zorluydu ve çok şey öğrendik.",
    techStack: ['Django', 'Python', 'JavaScript', 'Websockets', 'PostgreSQL', 'Docker', 'Nginx', 'Web3', 'Solidity'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Transcendance',
      },
    ],
    images: [
      {
        src: '/trans1.png',
        alt: 'Transcendance landing page',
      },
      {
        src: '/trans2.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans3.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans4.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans5.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans6.png',
        alt: 'Transcendance game',
      }

    ],
  },
  {
    title: 'Minishell',
    description:
      "Minishell, basit bir kabuk oluşturmayı amaçlayan bir projedir. C\'de işlem oluşturma ve yönetimi için harika bir giriştir, temel Unix komut satırı işlevselliğini sunar. Bu çok zorlayıcı bir projeydi, ama ondan çok şey öğrendim.",
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Michelle-42',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Minishell landing page',
      }
    ],
  },
  {
    title: 'YouBot',
    description:
      'YouBot, Pexels\'tan Videoları Kazıyan, bir Şarkılar Klasöründen rastgele bir şarkı ekleyen ve ardından videolarınızı YouTube kanalınıza sürekli içerik oluşturma için otomatik olarak yükleyen bir Python botudur.',
    techStack: ['Python', 'YouTube API', 'Pexels API'],
    date: '2022',
    links: [
      {
        name: "YouTube Video",
        url: "https://youtu.be/vp1v5mBG7rA "
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/YouBot',
      }
    ],
    images: [
      {
        src: '/youbot1.jpg',
        alt: 'Youbot landing page',
      },
      {
        src: '/youbot2.png',
        alt: 'Youbot chatbot',
      },
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      'Düzgün ve etkileşimli bir kullanıcı deneyimi için GSAP animasyonları ile vanilya HTML, CSS ve JS ile oluşturulan önceki geleneksel portföyüm.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: 'https://toukoum.github.io/oldPortfolio/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/oldport2.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup Projesi',
    title: 'Synto',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Eğlence Aracı',
    title: 'Rrate',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Rrate' }} />,
  },
  {
    category: 'Hackathon Kazananı',
    title: 'Defai',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Defai' }} />,
  },
  {
    category: 'Hackathon Kazananı',
    title: 'Fitgear',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Fitgear' }} />,
  },
  {
    category: 'İş Zekası',
    title: 'Datai',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Datai' }} />,
  },
  {
    category: '42 Projesi',
    title: '3d Pong Game',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  },
  {
    category: '42 Projesi',
    title: 'Minishell',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Minishell' }} />,
  },
  {
    category: 'Otomasyon',
    title: 'YouBot',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'YouBot' }} />,
  },
  {
    category: 'Web Geliştirme',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
];
