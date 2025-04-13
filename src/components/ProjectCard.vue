<template>
  <div class="project-card-c">
    <div class="right-side">
      <div class="title-description-wrapper">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
      <a :href="link" target="_blank" class="link">
        <img src="../assets/icons/github.svg" alt="github" class="github-icon" />
        <div class="link-text">View Code</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    link: String,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.project-card-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-left: 5px solid var(--color-border);
  border-radius: 5px;
  padding: 1rem 2rem;
  gap: 3rem;
  margin: 2rem 0;
  .left-side {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .title-description-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1rem;
      .title {
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-heading);
      }
      .description {
        font-size: 1rem;
        width: 100%;
      }
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      text-decoration: none;
      width: fit-content;
      margin-top: 1rem;
      .github-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        filter: var(--image);
        width: 2rem;
        height: 2rem;
      }
      .link-text {
        text-align: center;
        font-size: 1rem;
        color: var(--color-text);
      }
      &:hover {
        .github-icon {
          filter: var(--image-invert);
        }
        .link-text {
          color: var(--color-heading);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .right-side {
      .title-description-wrapper {
        .title {
          font-size: 1.2rem;
        }
        .description {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1rem;

    .right-side {
      .title-description-wrapper {
        .title {
          font-size: 1.2rem;
        }
        .description {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-height: 480px) {
    flex-direction: column;
    padding: 1rem;

    .right-side {
      .title-description-wrapper {
        .title {
          font-size: 1.2rem;
        }
        .description {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
