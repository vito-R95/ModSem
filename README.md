# ModSem
progetto modellazione concettuale per il web semantico.
Questo progetto è suddiviso in 3 parti:

I Parte -> creare l'ontologia con il software protegè
      Come prima cosa è stato creato il file musicaedemozioni.ttl contenuto nella cartella di Protegè, il file va caricato all'interno del programma Protegè per vedere l'ontologia 
      e le relative inferenze.
      Le inferenze funzionano solo attraverso il reasoner 'Pellet' perche sono presenti le regole SWRL che non possono essere inferite da un altro reasoner.

II Parte -> testare l'ontologia attraverso query con GraphDB
      Lo stesso file musicaedemozioni.ttl deve essere caricato nel software 'GraphDb', all'interno di questo programma funge da database per il sitoweb creato successivamente.
      Una volta aperto graphDb bisogna prima di tutto creare un graphDb free repository, dare un nome a scelta e selezionare nel campo 'ruleset' OWL2-RL(Optimized).
      Dopo aver creato il repositories aggiungere il file 'musicaedemozioni.ttl', cosi facendo si possono effettuare query sull'ontologia.

III Parte -> utilizzare graphDB come database per il sitoweb
      A questo punto TENENDO APERTO GRAPHDB è stato creato il sitoweb con il software visualStudio.
      Il sito ha estensione Vue e Html,Css e Javascript sono all'interno del file Index.
      Per mandare in esecuzione e vedere il sito, aprire il terminale su visual studio e digitare 'npm run serve'.
