import React, { FC, useState, useEffect } from 'react';
import { BootStrCardValuteWrapper } from './BootStrCardValute.styled';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import CardGroup from 'react-bootstrap/CardGroup';


interface CurrencyUSD {
   ccy: string;
   base_ccy: string;
   buy: string;
   sale: string;
}
 
interface BootStrCardValuteProps {}

const baseURL = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";

const BootStrCardValute: FC<BootStrCardValuteProps> = () => {
   const [post, setPost] = useState<CurrencyUSD[]>([]);

   useEffect(() => {
      axios.get(baseURL)
         .then(response => {
            setPost(response.data);
            console.log(response.data);
         })
   }, []);

   
   if (post.length === 0) {
      return <div>Loading...</div>;
   }

   const CurrencyUSD = post[1]; 
   const CurrencyEUR = post[0]; 

   return (
      <BootStrCardValuteWrapper>
         <CardGroup >
         <Card className="me-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://kartinki.pics/uploads/posts/2022-02/thumbs/1645126869_1-kartinkin-net-p-dollari-kartinki-1.jpg" />
            <Card.Body>
               <Card.Title>USD</Card.Title>
               <Card.Text>
                  До́ллар Соединённых Штатов Америки
               </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
               <ListGroup.Item>Покупка: {CurrencyUSD.buy} грн</ListGroup.Item>
               <ListGroup.Item>Продажа: {CurrencyUSD.sale} грн</ListGroup.Item>
            </ListGroup>
            <Card.Body>
               <Card.Link href="https://privatbank.ua/">Приват Банк</Card.Link>
               <Card.Link href="https://www.monobank.ua/?lang=uk">Монобанк</Card.Link>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }} className="me-3">
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/03/13/16/10/banknotes-7850299_1280.jpg" />
            <Card.Body>
               <Card.Title>EUR</Card.Title>
               <Card.Text>
               Е́вро - официальная валюта 20 стран «еврозоны»
               </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
               <ListGroup.Item>Покупка: {CurrencyEUR.buy} грн</ListGroup.Item>
               <ListGroup.Item>Продажа: {CurrencyEUR.sale} грн</ListGroup.Item>
            </ListGroup>
            <Card.Body>
               <Card.Link href="https://privatbank.ua/">Приват Банк</Card.Link>
               <Card.Link href="https://www.monobank.ua/?lang=uk">Монобанк</Card.Link>
            </Card.Body>
         </Card>
         
         
         </CardGroup>
      </BootStrCardValuteWrapper>
   );
};

export default BootStrCardValute;
