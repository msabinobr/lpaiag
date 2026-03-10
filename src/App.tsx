/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainSolution } from './components/PainSolution';
import { AiVideoDemo } from './components/AiVideoDemo';
import { Solutions } from './components/Solutions';
import { ConnectionBridge } from './components/ConnectionBridge';
import { HumanSupervision } from './components/HumanSupervision';
import { SocialProof } from './components/SocialProof';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <AiVideoDemo />
        <Solutions />
        <ConnectionBridge />
        <HumanSupervision />
        <SocialProof />
      </main>
    </div>
  );
}
