import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "dev.wells - momentum",
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="my-4">{children}</p>
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-16 font-bold font-sans text-xl">{children}</h2>
);

export default function MomentumPost() {
  return (
    <article className="font-serif my-8 text-lg text-stone-900 dark:text-stone-200">
      <h1 className="text-2xl font-bold font-sans">Momentum</h1>
      <Paragraph>
        Last summer, I read Marianne Bellotti's "Kill It With Fire: Manage Aging
        Computer Systems (and Future Proof Modern Ones)." As the title suggests,
        the book is filled with hardened wisdom on how to deal with legacy
        systems.
      </Paragraph>
      <Paragraph>
        One of the core themes of the book is when and how to rewrite versus
        when to manage or maintain. Bellotti writes:
      </Paragraph>
      <blockquote className="my-4 italic text-amber-500">
        "Many people try to fix things which are not, in fact, broken. Don't
        optimize beyond diminishing returns. Modernization needs momentum to
        finish the job."
      </blockquote>
      <Paragraph>
        It's this last nugget of wisdom that has resonated most strongly with
        me. Never underestimate the power of momentum, or the lack thereof.
      </Paragraph>
      <Paragraph>
        Around the time I was reading this, the team I worked on was effectively
        moving from one fire to the next. We oversaw frontend architecture for a
        mid-sized health tech company, and to be completely fair, our systems
        were far from legacy.
      </Paragraph>
      <Paragraph>
        Some parts of the stack were fairly old, but they were mostly backend
        systems or aging databases. The fires my team extinguished were (mostly)
        from a not-even 3-year-old monolithic frontend application. The
        technology was far from "legacy." In fact, it was a relatively
        up-to-date Next.js application at its core. However, in less than 3
        years, it had gone from a shiny new replacement for the prior monolith
        to a dumpster fire filled with hundreds of inconsistent components,
        intertwined state management systems, bespoke utilities hacking over
        tech debt, and orphaned experiments.
      </Paragraph>
      <Paragraph>
        We had a dozen different header components, four different primary
        colors, and no consistent styling standard.
      </Paragraph>
      <Paragraph>
        Many of these problems were product-related, such as not using our
        in-house design system to build things. However, just as many issues
        were due to engineers working to bolt feature on top of feature between
        tight deadlines. As a result, the application performed horribly.
        Running a local dev instance (on an M1) was impossible. If you tried to
        run tests locally, your laptop would crash.
      </Paragraph>
      <Paragraph>
        I remember that in the first couple of months, I decided to check the
        Lighthouse scores one day. When I saw they weren't even in double digits
        at the time, I asked my teammate how we could possibly be functioning
        like this.
      </Paragraph>
      <Paragraph>
        His answer? Oh, we just cache the heck out of every page.
      </Paragraph>
      <Paragraph>
        Things weren't all bad. At the same time, my team owned a monorepo for
        our design system, extension libraries, some utilities, and other
        reusable frontend functionality. We'd spent around half the year taking
        that monorepo and making it fast, easy, and satisfying to work in. We
        had a dream of scaling it to the rest of the organization, but it seemed
        nearly impossible to get anyone to stop working in silos. Even the teams
        that knew it was a better place to build in still didn't because of
        "pressure to ship features in the monolith."
      </Paragraph>
      <Paragraph>
        To put it bluntly, the engineering organization was ripe for burnout.
      </Paragraph>
      <Paragraph>
        Let's pause here a moment. Picture yourself in my shoes. You're a lead
        engineer on a platform team in charge of making the frontend cohesive
        and performant. You see the writing on the wall if the monolith
        continues down the track it's going. You're dealing with overwhelming
        negative momentum—momentum toward an unfavorable outcome. What would you
        do?
      </Paragraph>
      <Paragraph>
        One knee-jerk reaction is to rewrite the whole thing. As Bellotti points
        out above, this is usually not the correct answer. Not only would it
        likely take too long to be effective, but it wouldn't look particularly
        good for our team to abandon the rest of the frontend in search of
        greener pastures while all of the active product teams suffered. Also,
        at the end of the day, if we can't fix the underlying systemic problems,
        what's to prevent the rewrite from becoming the same as the current
        system? Technical standards and guardrails are only effective if the
        organization is accountable to them.
      </Paragraph>
      <Paragraph>
        Another option would be to maintain and improve the current system. This
        might work; however, we realized our small team would have to focus
        entirely on this to be effective. This had already been our strategy for
        around six months, and we were fighting a losing battle against the
        tide. People were contributing tech debt faster than we could clean
        things up and standardize.
      </Paragraph>
      <Paragraph>
        To decide, we asked ourselves, "How can we best set ourselves up for
        success in 12 months' time?"
      </Paragraph>
      <Paragraph>
        In other words, how can we shift the momentum in a positive direction?
      </Paragraph>
      <Heading>Refactoring</Heading>
      <Paragraph>
        We settled somewhere in the middle. We first had to staunch the blood
        loss to prevent what Bellotti might call existential risk (problems that
        endanger the health of the company), so we spent a focused month
        analyzing and triaging the critical issues in the monolith. During the
        same time, we worked with leads across the organization to begin a
        paradigm shift. We showcased the vast difference in developer experience
        between working in the monolith and working in our monorepo. This,
        combined with key buy-in from some engineering leadership, sparked a
        shift in the momentum. Other teams began to see the danger we were in
        and felt confident enough to push for something better.
      </Paragraph>
      <Paragraph>
        That said, many teams weren't ready or capable of fully shifting their
        development processes. To tackle this, we set up a transitional stage
        for teams to build inside the monolith (in decomposed packages), but in
        ways that were decoupled from the core of the application so that their
        functionality remained isolated and would be easy to migrate in the
        future.
      </Paragraph>
      <Paragraph>
        After a couple of months of this, we felt confident we could leave the
        monolith alone to focus on our ideal state. We knew that in this time,
        the monolith would likely continue to degrade, but the hope was we had
        slowed the problem enough that we could refocus our efforts on providing
        standards and a vastly improved experience outside of the monolith.
      </Paragraph>
      <Paragraph>
        To that end, rather than rewrite, we took a refactoring approach.
      </Paragraph>
      <Paragraph>
        I instructed our team to place a core emphasis on systems and standards,
        experimenting with what worked well within our stack currently and
        polishing our experience around that. We brought in tooling like
        Turborepo, Changesets, and a "pages as package" approach to application
        building. Standard after standard was initialized, and at every step of
        the way, we invited the community to have a say in working groups so
        that our architecture wasn't too top-down.
      </Paragraph>
      <Paragraph>
        We continued to showcase small improvements, compounding on the positive
        momentum we'd already generated.
      </Paragraph>
      <Paragraph>
        Many of the improvements are more subjective, but one key figure that
        improved was around CI times. At the beginning of 2021, it took nearly
        an hour to build and deploy changes in the monorepo (from PR checks
        running to publish). That's completely discounting review time. For some
        more fundamental packages (like the design system), that time could
        reach as high as an hour and a half. We were synchronously building and
        testing around 15 packages. If you think that's bad, the monolith took
        2-3 hours just to deploy to production (not even counting checks run in
        the PR).
      </Paragraph>
      <Paragraph>
        Now, our monorepo builds, lints, typechecks, and tests 40+ packages
        concurrently in only <strong>5-10 minutes</strong>. It also only runs
        tasks on what's actually changed, mostly thanks to Turborepo. Similarly,
        our deploy process takes around 7 minutes on average, publishing 40+
        packages and deploying numerous micro applications.
      </Paragraph>
      <Paragraph>
        At the same time, the perception of our team changed. Prior to my
        joining, our team was viewed as "gatekeepers" to the frontend, and as
        things got worse, we were inevitably blamed for some of the failings of
        the architecture. Whether this was merited or not, it was technically
        our responsibility, so it's not entirely an unfair statement.
      </Paragraph>
      <Paragraph>
        This all changed for the better as we gained momentum.
      </Paragraph>
      <Heading>Conclusions</Heading>
      <Paragraph>
        Fast forwarding to now, things are in a much better state. We still have
        our monolith, but we're in the process of migrating off it. The monorepo
        is flourishing, and we're constantly engaged in defining new best
        practices or innovating within our own architecture. Teams are engaged
        and see the frontend as not only something that is constantly evolving
        for the better, but something they truly have a stake in.
      </Paragraph>
      <Paragraph>
        Bringing it back to the quote at the top of this article, the
        modernization of our architecture would not have been possible had it
        not been for us responding with equal severity to the problems we were
        facing. We made it clear that things needed to change, but we didn't set
        out to fade into the background and design some miracle solution while
        everyone else toiled away.
      </Paragraph>
      <Paragraph>
        No, we brought the organization along with us step by step to see that
        change was happening. This fed back as confidence for our team that we
        were moving forward.
      </Paragraph>
      <Paragraph>
        I hope this lesson will resonate with someone out there. No situation
        like this is the same, but looking back, the focus on momentum set the
        stage for transformative processes. If you find yourself struggling
        against the current of degrading systems, take a step back and ask
        yourself:
      </Paragraph>
      <Paragraph>
        "How can we best set ourselves up for success in 12 months?"
      </Paragraph>
      <Paragraph>"How can we shift momentum?"</Paragraph>
      <hr />
      <Paragraph>
        For more on this topic, I highly recommend checking out "Kill It With
        Fire." By taking a proactive and strategic approach, you can better
        manage aging computer systems, future-proof modern ones, and ultimately
        create an environment in which your team and organization can thrive.
      </Paragraph>
      <Heading>References</Heading>
      <ul className="list-disc mt-4 list-inside text-amber-500">
        <li>
          <Link href="https://www.penguinrandomhouse.com/books/667571/kill-it-with-fire-by-marianne-bellotti/">
            Kill It With Fire
          </Link>
        </li>
        <li>
          <Link href="https://turbo.build/repo">Turborepo</Link>
        </li>
        <li>
          <Link href="https://github.com/changesets/changesets">
            Changesets
          </Link>
        </li>
      </ul>
    </article>
  );
}
