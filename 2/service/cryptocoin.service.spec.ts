import { Cryptocoin } from "../model/cryptocoin";
import { CryptocoinService } from "./cryptocoin.service";

// Straight Jasmine testing without Angular's testing support
describe('Cryptocoin Service', () => {
  let service: CryptocoinService;
  beforeEach(() => { service = new CryptocoinService(); });

  it('#ADDITEM should return correct name', () => {
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    let cryptocoinCreated=<any>service.getItemById("1")
    expect(cryptocoinCreated.name).toBe("COSMOS");
  });

  it('#UPSERT should insert if ID NOT FOUND', () => {
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    service.upsert(new Cryptocoin("4","CHAINLINK","LINK","20"))
    let totalCryptoCoinsCreated=service.list.length;
    expect(totalCryptoCoinsCreated).toBe(4);
  });

  it('#UPSERT should update if ID FOUND', () => {
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    service.upsert(new Cryptocoin("3","CHAINLINK","LINK","20"))
    let totalCryptoCoinsCreated=service.list.length;
    expect(totalCryptoCoinsCreated).toBe(3);
  });

  it('#HASITEMS should return true when found otherwise false', () => {
    
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    let hasItem=service.hasItem(new Cryptocoin("5","DOGE COIN","DOGE","2"))
    expect(hasItem).toBe(false);
    hasItem=service.hasItem(new Cryptocoin("3","Polkadot","DOT","34"))
    expect(hasItem).toBe(true);
  });

  it('#FINDBYNAME should return valid crypto when FOUND', () => {    
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    let foundCrypto = service.findByName("Binance coin");
    expect(foundCrypto.getId()).toBe("2");
  });

  it('#FINDBYSYMBOL should return valid crypto when FOUND', () => {    
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    let foundCrypto = service.findBySymbol("BNB");
    expect(foundCrypto.getId()).toBe("2");
  });

  it('#DELETE should delete item by id', () => {
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    let crytoToDelete=new Cryptocoin("3","Polkadot","DOT","34")    
    service.addItem(crytoToDelete);
    service.upsert(new Cryptocoin("4","CHAINLINK","LINK","20"))
    let totalCryptoCoinsCreated=service.list.length;
    expect(totalCryptoCoinsCreated).toBe(4);
    service.deleteItem(crytoToDelete)
    totalCryptoCoinsCreated=service.list.length;
    expect(totalCryptoCoinsCreated).toBe(3);
  });

  it('#DESTROY should empty the list', () => {    
    service.addItem(new Cryptocoin("1","COSMOS","ATOM","19"))
    service.addItem(new Cryptocoin("2","Binance coin","BNB","202"))
    service.addItem(new Cryptocoin("3","Polkadot","DOT","34"))
    service.destroy();
    expect(service.list.length).toBe(0);
  });

});