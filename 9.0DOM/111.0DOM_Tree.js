//DOM Tree - use for newIndex.html
// To understand the concept of DOM Tree we will use newIndex.html file (It has less number of elements)

/*
- since browser knows we will primarily work with document, it will make document as root node
- Document is javascript object

- Now browser adds all the HTML code in document, as child element of Document node (HTML -> root element)

-  HTML->elemwnt node, head->element node, /n+space->text node

--HTML paxi pani \n ra space xa, tara browser completely ignore this fact as, html paxi jahile pani head tag nai aauxa

                            Document
                               |
                               |
                              HTML
                               |
                    -------------------------------------
                    |                      |             |
                   head                 \n+Space        body
                    |                                    |
        ------------------------------                --------------
        |     |      |     |        |                 |     |     |     
    /n+Space title \n+S   Script   \n+S             \n+S   div   \n+S 
                |                                           |                  
        DOM Traversing                                  ----------------------------          
                                                        |       |     |     |       |
                                                       \n+S    h1    \n+S   P      \n+S
                                                                |           |
                                                             My Heading  Some Useful Information 

*/


/*


*/