1. WebApp
2. Domain - rozwiozanie biznesowe
3. Infrastucture związana z frameworkiem

WebApp -> Domain -> Infrastructure
WebApp -> Infrastructure

(Prawidłowo)
WebApp -> Domain <- Infrastructure
WebApp -> Domain
Infrastructure -> Domain

IoC - Inversion of Control - idea co chcemy zrobić

Jak chcemy to zrobić:

1. Dependency Injection

- Castle.Windsor, Autofac itd. (implementacja) .NET5 (wbudowany DI)
- kontenery IoC posiadają cykle ycia zalezności:
  -- SIngleton - objekt zostanie stworzony raz i uzywany ( ta sama instancha ) do momentu wyłączenia aplikacji
  (Iinstancja stoworzy objekt klasy w pamieńci - zajmuje miejsce)
  -- PerWebRequest - oboelt zostanie stworzony raz per request uytkownik
  PerWet

2. Eventy (zdarzenia)
3. Monady (programowanie funkcyjne)
4. framework'i

DependencyInjection

Visual Studio 2022 Community
