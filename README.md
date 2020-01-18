# OnlineShop
Site comercial
1. Introducere 

Se va realiza o aplicatie web cu informatii despre produse dintr-un anumit domeniu, precum si organizarea lor intr-un „cos” de cumparaturi.
# Aplicatia va contine:
1. Home page
2. O pagina cu toate produsele
3. O pagina cu newsletter/promotii
4. „Cosul meu”
5. O pagina unde clientii isi pot spune parerea despre serviciile acordate
6. O pagina de administrare a aplicatiei
2. Cerinte functionale

2.1 Cerinte generale – 2p

CG-10(1p): Aplicatia va permite autentificare in modul admin, cu user si parola. Nota: nu este necesara functionalitatea de creare de cont. Contul de administrator poate fi hardcodat.CG-20(1p): Aplicatia trebuie sa aiba un favicon si un titlu relevant.

CG-30(1p – BONUS): Aplicatia va fi incarcata pe Heroku (sau alt site de hosting) pentru a fi accesata pe web.

CG-40(1p – BONUS): La listarea unui link catre orice pagina a aplicatiei pe facebook link-ul va determina afisarea unei imagini si a unei descrieri.

2.2 Top Menu – 1p

TM-10(1p): Utilizatorul va putea accesa direct din orice pagina urmatoarele functionalitati:

-  Home page
-  Produse 
-  Promotii
-  Cosul meu
-  Recenzii

TM-20: La autentificarea in modul admin(vezi MA-10) aplicatia va afisa in plus un link catre pagina „Admin” pe fiecare pagina.

2.3 Home page – 5p

HP-10(4p): Home page-ul va afisa un slider cu animatii reprezentand reclame/promotii la produse (minim 3 animatii).

HP-20(1p): La click pe sectiunea cu reclama utilizatorul va fi redirectionat catre pagina produsului respectiv.

2.4 Produse – 6p

Pd-10(2p): Produsele vor fi organizate sub forma unei galerii cu poza, nume, specificatii minime, pret.

Pd-20(2p): Va exista optiunea de sortare a produselor dupa pret (ascendent/descendent) sau dupa nume.

Pd-30(2p): Apasand pe una dintre imagini vom fi trimisi catre o pagina cu specificatiile produsului, de acolo putand sa punem produsul in „Cosul meu”.

2.5 Newsletter/promotii – 2p

NP-10(2p): Vor fi afisate anunturi si promotiile zilei.

2.6 Cosul meu – 5p

CM-10(2p): Va contine produsele adaugate de utilizator din pagina „Produse” (vezi Pd-30). Fiecare produs va avea optiunile: 

- Remove
- Modificare numar bucati
- Pret

CM-20(3p): La finalul listei va fi afisat totalul comenzii, costul transportului si un buton „Finalizeaza comanda”. Apasand butonul vom fi trimisi catre o noua pagina unde trebuiesc completate detaliile de livrare.

Nota: autentificarea nu este necesara pentru plasarea unei comenzi.

CM-30(3p - BONUS): Dupa finalizarea comenzii se va trimite un mail cu rezumatul comenzii atat catre cumparator cat si catre vanzator.

2.7 Recenzii – 5p

Pagina contine un set de intrebari (minim 5) pentru client in scopul dezvoltarii aplicatiei.

R-10(3p): Pagina va contine in partea de sus un progress-bar care va ocupa toata latimea paginii, care va fi actualizat cu fiecare raspuns

R-20(2p): Pentru fiecare raspuns pozitiv sau negativ se va afisa o animatie corespunzatoare.

R-30: La sfarsitul chestionarului raspunsurile clientilor sunt salvate pe server.

2.8 Modul admin – 14p

MA-10: Pagina „Admin” va contine urmatoarele functionalitati:

- management produse
- istoric comenzi
- listare recenzii

MA-20(8p): Functionalitatea „management produse” va permite:

- adaugarea unui produs
- activarea unui produs (dupa activare acesta va fi listat in pagina „Produse” (vezi Pd-10)
- dezactivarea unui produs (dupa dezactivare acesta nu va mai fi listat in pagina „Produse” (vezi Pd-10)

MA-30(4p): Functionalitatea „istoric comenzi” va lista comenzile introduse de clienti intr-un interval de timp selectat in ordine cronologica, cu cel putin urmatoarele detalii:

- nume utilizator
- localitatea livrarii
- numar produse
- suma totala
- data comenzii

MA-40(2p): Functionalitatea „listare recenzii” va afisa recenziile introduse de utilizatori in ordine cronologica.

3. Cerinte non-functionale

NF-10 : Aplicatia trebuie sa functioneze in Chrome si Firefox.

NF-20 : Aplicatia trebuie sa poata fi folosita (sa aiba un aspect placut, textul sa fie inteligibil) atat pe PC cat si pe dispozitive mobile (tableta, telefon). Functionalitatea este cunoscuta si sub numele de responsive design .

NF-30 : Livrabilul trebuie sa fie implementat folosind best practices in domeniu (e.g. fisiere separate HTML, CSS, JS; evitare cod duplicat; performanta; meta tags relevante).

NF-40 : Grafica aplicatiei: aplicatia trebuie sa aiba un aspect modern si prietenos cu utilizatorul.

NF-50 : Tehnologiile permise sunt: HTML, CSS, JavaScript, Node.js JRE. Bbibilotecile/framework-urile agreate sunt: Bootstrap, FontAwesome, JQuery, Express, Mongoose. Pentru alte biblioteci este necesara agrearea prealabila cu profesorul.

Note:

1. Intrucat nu vom studia lucrul cu baze de date la laborator, puteti folosi orice mecanism pentru persistenta datelor. Vom discuta cel putin un mecanism in laboratoarele de back-end.
2. Cerintele de la “modul admin” vor fi implementate atat front-end cat si backend (nu se puncteaza solutii de prezentare exclusiv front-end)
3. Pentru validarea temei este necesara prezentarea in laborator. Orice parte care nu poate fi explicata nu va fi punctata. Pentru a demonstra ca stapaniti proiectul, in cadrul prezentarii se poate cere omplementarea inca unei functionalitati sau a unui bug fix.
4. Termenul limita pentru prezentarea finala este 13 ianuarie 2020. Este recomandat sa prezentati mai devreme pentru a avea timp sa rezolvati eventualele probleme/scapari
5. Nerespectarea cerintelor non-functionale pentru oricare capitol functional duce la anularea punctajului acestuia.
