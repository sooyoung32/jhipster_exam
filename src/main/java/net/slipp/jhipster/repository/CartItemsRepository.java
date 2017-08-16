package net.slipp.jhipster.repository;

import net.slipp.jhipster.domain.CartItems;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CartItems entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CartItemsRepository extends JpaRepository<CartItems,Long> {
    
}
