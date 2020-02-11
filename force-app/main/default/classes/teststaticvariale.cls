public class teststaticvariale {
     public static string a = '';
     public void callme()
     {
         a = 'was';
     }
     public void b()
     {
          System.debug(a);
     }
}