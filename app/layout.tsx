import Image from 'next/image'
import "./globals.css";
import "./src/bootstrap/bootstrap.min.css";
import "./src/css/style.css";
import "./src/css/index.css";
import "./src/img/favicon.ico";
import Link from 'next/link';
import logo from './logo.png';

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <title>Nextjs | T1412 DESARROLLO DE APLICACIONES WEB II</title>
      </head>
      <body>
        <div className="row col-12">
          <div className="col-2">
            <h1>&nbsp;</h1>
          </div>
          <div className="col-8">
            <nav className="nav nav-pills nav-fill">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Image src={logo} width={40} height={40} alt="Unitec" className="ml-2" />
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Tarea1" id="home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/Tarea1">Tarea 1</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-2">
            <h1>&nbsp;</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
