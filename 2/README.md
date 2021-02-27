Finish the Classes in the ./model folder. Think of getter/setter.

Implement these 3 services in ./service/interface:
*  asset.service.ts
*  currency.service.ts
*  service.ts

Think of generic type-params!

Implement these 3 services in ./service:
*  fiat.service.ts
*  metal.service.ts
*  cryptocoin.service.ts

Think of inheritance structure!

##############

Write very simple Tests in ./test.spec.ts:
*  create a cryptocoinService, add the coins from /static_model; ensure that cryptocoinService.findBySymbol("BTC") is not empty

*  create a fiatService, create a fiat with id "1"; upsert that fiat and ensure that fiatService.findById("1") is not
    empty and (NOT instance of Asset && instance of Currency)

*  create a metalService, add the metals from the /static_model; metalService.findById("4") is not empty and instance of Asset

try to use expect() for the test cases
